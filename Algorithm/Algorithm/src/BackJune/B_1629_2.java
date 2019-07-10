package BackJune;

import java.util.Scanner;

public class B_1629_2 {

    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        int a = input.nextInt();
        int b = input.nextInt();
        int c = input.nextInt();

        long ans = 1;
        long multiply = a % c;

        while (b > 0) {
            if (b % 2 == 1) {
                ans *= multiply;
                ans %= c;
            }
            multiply = ((multiply % c) * (multiply % c)) % c;
            b /= 2;
        }
        System.out.println(ans);
    }

}
