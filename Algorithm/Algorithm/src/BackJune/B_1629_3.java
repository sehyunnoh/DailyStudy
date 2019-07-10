package BackJune;

public class B_1629_3 {
    public static void main(String[] ar){
        B_1629_3 mp = new B_1629_3();
        long a = 2;
        long n = 10;

        long result = mp.calcPow(a, n);
        System.out.print("result = " + result);
    }

    public long calcPow(long a, long n){
        if(n == 0){
            return 1;
        }else{
            long temp = calcPow(a, n/2);
            if(n%2 == 0) return temp*temp;
            else return temp*temp*a;
        }
    }
}