export function getDayNumberByDayName(dayName) {
    const dayMap = new Map([
        ["Monday", 0],
        ["Tuesday", 1],
        ["Wednesday", 2],
        ["Thursday", 3],
        ["Friday", 4],
        ["Saturday", 5],
        ["Sunday", 6]
    ]);

    return dayMap.get(dayName);
}

export function formatToShortDate(date) {
    const offset = date.getTimezoneOffset()
    return new Date(date.getTime() - (offset * 60 * 1000)).toISOString().split('T')[0]
}