import java.util.Scanner;

public class Study {

    public static void main(String[] args) {

        int a = 10, b = 10;
        System.out.println(5 + a++ * 2); // 25
        System.out.println(5 + ++b * 2); // 27

        int j =0 ;
        int i = ++j + j * 5;
        System.out.println(i);

        int k =0 ;
        int t = k++ + k * 5;
        System.out.println(t);

        // int x = 1;
        // int y = x++ + x;
        // System.out.println(y);

        int x = 1;
        int y = x + x++;
        System.out.println(y);

        Scanner sc = new Scanner(System.in);
        sc.close();

    }
}