package BackJune;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class B_1629 {

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("D:\\_workspace\\_DailyStudy\\Algorithm\\Algorithm\\src\\BackJune\\input\\B_1629.txt"));

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int a = Integer.parseInt(st.nextToken());
        int b = Integer.parseInt(st.nextToken());
        int c = Integer.parseInt(st.nextToken());

        int total = 1;
        int start = -1;
        ArrayList<Integer> alist = new ArrayList<>();
        for (int i = 0; i < b; i++) {
            total *= a;
            int mod = total % c;
            if (mod >= 10) {
                continue;
            }
            if (alist.contains(mod)) {
                break;
            } else {
                if (start == -1) {
                    start = i;
                }
                alist.add(mod);
            }
        }

        int remain = b % alist.size();
        System.out.println(alist.get(alist.size()-1 - remain));
    }
}
