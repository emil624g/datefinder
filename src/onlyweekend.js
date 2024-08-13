function weekend(dates, weekend){

            if (weekend == "n"){
                dates = dates;
            } else {
                const d = new Date();
                let key = d.getDay() + 1;

                dates.forEach((e) => {
                    e = e[Object.keys(e)[Object.keys(e).length - 1]];
                    for (let i = 0; i < e.length; i++) {
                        if (key % 7 == 1 || key % 7 == 2 || key % 7 == 3 || key % 7 == 4){
                            e.splice(i, 1);
                            i--;
                        }
                        key++;
                    }
                })
            }

            return dates;
        }

module.exports = weekend;