class MemoryProfiler {
    _started;
    _readings;
    _lastReading;
    _interval;
    _intervalId;

    constructor(interval = 5000) {
        this._started = false;
        this._readings = [];
        this._interval = interval;
    }

    start() {
        this._intervalId = setInterval(() => {
            const contextReading = [
                new Date(),
                performance.now(),
                this._fetchMemoryData()
            ]

            this._lastReading = contextReading;
            this._readings.push(contextReading);
        })
    }

    async end() {

    }

    _fetchMemoryData() {
        const memObj = {
            osMax: 1,
            osFree: 1,
            processMemoryUsage: process.memoryUsage(),
            memoryUsageVariation: 1
        }

        return memObj;
    }
}