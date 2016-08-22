// recursion
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


// iteration
// f(1) = 1, f(2) = 3, f(3) = 5
// f(n) = 3f(n - 1) + 2f(n - 2) + f(n - 3), if n > 3
function f_iterative(n){
    // keep track of the solution for 
    // f(count), f(count+1), f(count+2) in a, b, c respectively
    function helper(a, b, c, count){
        if (count === n){
            return a;
        } else {
            return helper(b, c, 3*c + 2*b + a, count + 1);
        }
    }
    return helper(1, 3, 5, 1);
}

// order of growth
/*
q1: O(n)
q2: O(logn)
q3: O(2^n)
q4: O(sqrtn)
q5: O(1)
q6: trick question. would be O(n/logn) if it follow the previous format
q7: O(n)
q8: O(2^n)
*/
