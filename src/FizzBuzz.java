//  OUTPUT

//    n = 15,
//        Return:
//        [
//            "1",
//            "2",
//            "Fizz",
//            "4",
//            "Buzz",
//            "Fizz",
//            "7",
//            "8",
//            "Fizz",
//            "Buzz",
//            "11",
//            "Fizz",
//            "13",
//            "14",
//            "FizzBuzz"
//        ]

import java.util.ArrayList;
import java.util.List;

public class FizzBuzz {
    public List<String> fizzBuzz(int n) {
        List<String> fb = new ArrayList<String>();
        for (int i = 0; i <= n; i++)
        {
            if(i%15 == 0)
               fb.add("Fizzbuzz");
            else if(i%3 == 0)
                fb.add("Fizz");
                else if(i%5 == 0)
                    fb.add("Buzz");
            else
                fb.add(String.valueOf(i));
        }
        return fb;
    }
}
