export interface PThread {
    unusedWorkers: Worker[];
    runningWorkers: Worker[];
}

export interface DuckDBModule extends EmscriptenModule {
    stackSave: typeof stackSave;
    stackAlloc: typeof stackAlloc;
    stackRestore: typeof stackRestore;
    lengthBytesUTF8: typeof lengthBytesUTF8;
    stringToUTF8: typeof stringToUTF8;

    ccall: typeof ccall;
    PThread: PThread;
}
