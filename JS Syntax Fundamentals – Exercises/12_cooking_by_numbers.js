function solve(num, ...args) {
    let result = Number(num);
    for (let i = 0; i < args.length; i++) {
        switch (args[i]) {
            case 'chop':
                result /= 2
                break;
            case 'dice':
                result = Math.sqrt(result)
                break;
            case 'spice':
                result += 1
                break;
            case 'bake':
                result *= 3
                break;
            case 'fillter':
                result -= result * 0.2
                break;
        }
        console.log(result);
    }
    
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')