package BackJune;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class B_2217 {

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("D:\\_workspace\\_DailyStudy\\Algorithm\\Algorithm\\src\\BackJune\\input\\B_2217.txt"));

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int num = Integer.parseInt(st.nextToken());
        int[] rope = new int[num];

        int max = Integer.MIN_VALUE;
        for (int i = 0; i < num; i++) {
            st = new StringTokenizer(br.readLine());
            rope[i] = Integer.parseInt(st.nextToken());
        }

        Arrays.sort(rope);
        for (int i = rope.length - 1; i >= 0; i--) {
            int temp = rope[i] * (rope.length - i);
            if (max < temp) {
                max = temp;
            }
        }
        System.out.println(max);
    }
}
