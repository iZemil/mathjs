

export default function factorial(num) {
    var value = 1,
        i = 2;

    for (; i <= num; i+=1) value *= i;

    return value;
}