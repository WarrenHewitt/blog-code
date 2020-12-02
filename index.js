

export const a = function () {
    console.log(233);

}
process.nextTick(() => {
    console.log(6);
})

setTimeout(() => {
    console.log(9);
    process.nextTick(() => {
        console.log(10);
    })

    new Promise((resolve) => {
        console.log(11);
        resolve()
    }).then(() => {
        console.log(12);
    })
})

const nameValllue = '22'
