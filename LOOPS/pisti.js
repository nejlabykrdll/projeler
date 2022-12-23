let maca='maca'
let kupa='kupa'
let karo='karo'
let sinek='sinek'
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 13; j++) {

        if (i == 1) {
            if (j <= 10) {

                console.log(maca, j)
            }
            else {
                if (j == 11) {
                    console.log(maca,'kiz')
                }
                if (j == 12) {
                    console.log(maca, 'papaz')
                }
                if (j == 13) {
                    console.log(maca ,'joker')
                }
            }
        }
        
        else if (i == 2) {
            if (j <= 10) {

                console.log(kupa, j)
            }
            else {
                if (j == 11) {
                    console.log(kupa ,'kiz')
                }
                if (j == 12) {
                    console.log(kupa, 'papaz')
                }
                if (j == 13) {
                    console.log(kupa, 'joker')
                }
            }
        }
        else if (i == 3) {
            if (j <= 10) {

                console.log(karo, j)
            }
            else {
                if (j == 11) {
                    console.log(karo ,'kiz')
                }
                if (j == 12) {
                    console.log(karo, 'papaz')
                }
                if (j == 13) {
                    console.log(karo, 'joker')
                }
            }
        }
        else if (i == 4) {
            if (j <= 10) {

                console.log(sinek, j)
            }
            else {
                if (j == 11) {
                    console.log(sinek, 'kiz')
                }
                if (j == 12) {
                    console.log(sinek ,'papaz')
                }
                if (j == 13) {
                    console.log(sinek ,'joker')
                }
            }
        }
    }
    console.log('------------------------------------------------')
}