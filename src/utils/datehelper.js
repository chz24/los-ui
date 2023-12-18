export function getDayNumberByDayName(dayName) {
    const dayMap = new Map([
        ["Sunday", 0],
        ["Monday", 1],
        ["Tuesday", 2],
        ["Wednesday", 3],
        ["Thursday", 4],
        ["Friday", 5],
        ["Saturday", 6]
    ]);

    return dayMap.get(dayName);
}

export function formatToShortDate(date) {
    const offset = date.getTimezoneOffset()
    return new Date(date.getTime() - (offset * 60 * 1000)).toISOString().split('T')[0]
}