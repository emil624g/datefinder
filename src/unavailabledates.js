function unavailabledates(dates) {
    console.log("Write unavailable dates in this format: 2024-09-25, 2024-10-13, 2024-10-14");

    return new Promise((resolve) => {
        process.stdin.once("data", (info) => {
            info = info.toString().trim().split(",");

            let delDates = [];
            for (let i = 0; i < info.length; i++) {
                const l = new Date(info[i]);
                let delYear = l.getFullYear();
                let delMonth = l.getMonth();
                let delDay = l.getDate();

                delDates.push({year: delYear, month: delMonth, day: delDay});
            }

            delDates.forEach((e) => {
                dates.forEach((f) => {
                    if (e.month == f.value) {
                        let last = f[Object.keys(f)[Object.keys(f).length - 1]];
                        for (let i = 0; i < last.length; i++) {
                            if (last[i] == e.day) {
                                last.splice(i, 1);
                            }
                        }
                    }
                });
            });

            resolve(dates);
        });
    });
}

module.exports = unavailabledates;
