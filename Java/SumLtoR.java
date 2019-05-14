public class SumLtoR {
    public static void main(String[] args) {

        int n = 50000;
        double sumLtoR = 0;
        double sumRtoL = 0;

        for (int i = 1; i <= n; i++) {
            sumLtoR += 1.0 / (double) i;
        }
        System.out.println(sumLtoR);

        for (int i = n; i >= 1; i--) {
            sumRtoL += 1.0 / (double) i;
        }
        System.out.println(sumRtoL);

        sumLtoR = 0;
        sumRtoL = 0;

        for (int i = 1; i <= n; i++) {
            sumLtoR += 1.0 / i;
        }
        System.out.println(sumLtoR);

        for (int i = n; i >= 1; i--) {
            sumRtoL += 1.0 / i;
        }
        System.out.println(sumRtoL);
    }
}