function unavailabledates(dates, unavailableDates) {

            unavailableDates = unavailableDates.toString().trim().split(",");

            let delDates = [];
            for (let i = 0; i < unavailableDates.length; i++) {
                const l = new Date(unavailableDates[i]);
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

            return dates;
        }

module.exports = unavailabledates;
