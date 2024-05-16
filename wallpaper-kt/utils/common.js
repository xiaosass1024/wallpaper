export function timeDifference(timestamp) {
    const now = new Date();
    const past = new Date(timestamp);
    const diffInSeconds = (now - past) / 1000;

    const minutes = diffInSeconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const months = days / 30;

    if (minutes < 1) {
        return '1分钟内';
    } else if (hours < 1) {
        return `${Math.floor(minutes)}分钟`;
    } else if (days < 1) {
        return `${Math.floor(hours)}小时`;
    } else if (days < 30) {
        return `${Math.floor(days)}天`;
    } else if (months <= 3) {
        return `${Math.floor(months)}个月`;
    } else {
        return null;
    }
}

// 示例用法：传入一个时间戳，如 Date.now() - 2000 (现在减去2000毫秒)
console.log(timeDifference(Date.now() - 2000));
