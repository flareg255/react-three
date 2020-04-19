const randBetween = (start, end) => {
    let r = 0;
    r = Math.floor(Math.random() * end) + start;

    return r;
}

export { randBetween };