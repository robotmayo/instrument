import * as winston from 'winston';
winston.setLevels(winston.config.syslog.levels);
winston.addColors(winston.config.syslog.colors);

function formatter(options:any){
    return '[' + (new Date()).toISOString() + ']'
    + ' '
    + options.level.toUpperCase()
    + ' '
    + (options.label ? options.label + ' ' : '')
    + options.message;
}



export default function makeLogger(id:string, label:string, level:string = process.env.NODE_DEBUG || 'debug', colorize:boolean = true){
    return winston.loggers.add(id, {
        console: {
            level,
            colorize,
            label,
            formatter,
        }
    });
}
