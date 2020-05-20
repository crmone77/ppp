import * as path from 'path';
import { existsSync } from 'fs';
import { readJsonFile, useSettings, writeJsonFile } from '../utils';
import { VideoMeta } from './VideoMeta';

export type DownloadStatus = 'prepared' | 'progressing' | 'interrupted' | 'paused' | 'completed' | 'failed' | 'broken';

export interface Video extends VideoMeta {
    status: DownloadStatus;
    path?: string;
}

type DatabaseData = {[videoId: number]: Video};

export class Database {
    private _db: DatabaseData = {};
    private _dbFilePath: string;

    constructor(databaseFileName: string = 'db.json') {
        this._dbFilePath = path.join(useSettings().downloadsDir, databaseFileName);

        if (existsSync(this._dbFilePath)) {
            this._db = readJsonFile<DatabaseData>(this._dbFilePath);
        }
    }

    public async set(video: Video, autoSave: boolean = true) {
        this._db[video.id] = video;

        if (autoSave) {
            return this.save();
        }
    }

    public get(id: number): Video|undefined {
        return this._db[id];
    }

    public async save() {
        return writeJsonFile(this._dbFilePath, this._db);
    }
}