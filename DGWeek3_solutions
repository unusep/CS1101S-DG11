function sum_of_digits(n){
    if (n === 0){
        return 0;
    } else {
        return n % 10 + sum_of_digits(Math.floor(n/10));
    }
}
function is_multiple_of_nine(x){
    if (x < 9) {
        return false;
    } else if (x === 9) {
        return true;
    } else {
        return is_multiple_of_nine(sum_of_digits(x));   
    }
}

function staircase(n){
    function try_steps(remaining, prev_step){
        if (prev_step <= 0){
            return 0;
        } else if (remaining === 0){
            return 1;
        } else if (remaining < 0){
            return 0;
        } else {
            var next_step = prev_step - 1;
            // solution if we build a step of next_step height + 
            // solution if we don't build a step of next_step height
            return try_steps(remaining - next_step, next_step) + 
                try_steps(remaining, next_step);
        }
    }
    return try_steps(n, n + 1);
}
