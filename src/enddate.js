function enddate(enddate) {
    const d = new Date();
    let currentYear = d.getFullYear();
    let currentMonth = d.getMonth();
    let currentDay = d.getDate();

    let dates = [];
    let i = 0;
    while (i <= 11) {
        switch (i) {
            case 0:
                let jan = [];
                for (let j = 1; j <= 31; j++) {
                    jan.push(j);
                }
                dates.push({ value: 0, January: jan });
                break;
            case 1:
                let feb = [];
                for (let j = 1; j <= 28; j++) {
                    feb.push(j);
                }
                dates.push({ value: 1, Febuary: feb });
                break;
            case 2:
                let mar = [];
                for (let j = 1; j <= 31; j++) {
                    mar.push(j);
                }
                dates.push({ value: 2, March: mar });
                break;
            case 3:
                let apr = [];
                for (let j = 1; j <= 30; j++) {
                    apr.push(j);
                }
                dates.push({ value: 3, April: apr });
                break;
            case 4:
                let may = [];
                for (let j = 1; j <= 31; j++) {
                    may.push(j);
                }
                dates.push({ value: 4, May: may });
                break;
            case 5:
                let jun = [];
                for (let j = 1; j <= 30; j++) {
                    jun.push(j);
                }
                dates.push({ value: 5, June: jun });
                break;
            case 6:
                let jul = [];
                for (let j = 1; j <= 31; j++) {
                    jul.push(j);
                }
                dates.push({ value: 6, July: jul });
                break;
            case 7:
                let aug = [];
                for (let j = 1; j <= 31; j++) {
                    aug.push(j);
                }
                dates.push({ value: 7, August: aug });
                break;
            case 8:
                let sep = [];
                for (let j = 1; j <= 30; j++) {
                    sep.push(j);
                }
                dates.push({ value: 8, September: sep });
                break;
            case 9:
                let okt = [];
                for (let j = 1; j <= 31; j++) {
                    okt.push(j);
                }
                dates.push({ value: 9, Oktober: okt });
                break;
            case 10:
                let nov = [];
                for (let j = 1; j <= 30; j++) {
                    nov.push(j);
                }
                dates.push({ value: 10, November: nov });
                break;
            case 11:
                let dec = [];
                for (let j = 1; j <= 31; j++) {
                    dec.push(j);
                }
                dates.push({ value: 11, December: dec });
                break;
        }
        i++;
    }

            const p = new Date(enddate.toString().trim());
            let endYear = p.getFullYear();
            let endMonth = p.getMonth();
            let endDay = p.getDate();

            dates.forEach((e) => {
                if (e.value == endMonth) {
                    e = e[Object.keys(e)[Object.keys(e).length - 1]];
                    for (let i = e.length - 1; i >= endDay; i--) {
                        e.splice(i, 1);
                    }
                } else if (e.value == currentMonth) {
                    e = e[Object.keys(e)[Object.keys(e).length - 1]];
                    for (let i = currentDay - 1; i >= 0; i--) {
                        e.splice(i, 1);
                    }
                }
            });

            let key = 12 - endMonth;
            dates.splice(endMonth + 1, key);
            dates.splice(0, currentMonth);

            return dates;
        };

module.exports = enddate;
