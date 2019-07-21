```
ls
cd
man
date
cal
who
clear
logout
whatis
passwd
cat
more
less head
tail
history
>
>>
ssh nohs@atlas.sheridanc.on.ca
```
# view the calendar
```console
The cal command without any option or argument will output the current month's calendar. Try:
~$ cal
You can specify the year as an argument. Try:
~$ cal 1897
You can specify the month and year as arguments. Try:
~$ cal 2 1991
To get information about other options and arguments for the command cal, examine its manual page:
~$ man cal
How do you display the calendar for the current month?
How do you display the calendar for the same month last year?
How do you display the calendar for the year 1980?
```
^ : 시작되는 부분 지정
$ : 끝나는 부분 지정
\ : escape
. : any character, wild card
[] : square brackets
- : range
[^ ] : not의 의미
| : or
[ quantifiers (수량자) ]
* : *앞의 문자가 0에서 여러개  => {0,}
+ : +앞의 문자가 1에서 여러개 => {1,} 
? : ?앞의 문자가 없거나 하나 => {0,1}
{m} : m 개
{m,n} : m 이상 n 이하
{m,} : m 이상
*? : 수량자+?: r.*? => ?는 0으로 바뀜 => r 하나  (수량자 뒤에 ?가 붙으면 왼쪽의 작은 수량을 선택하게 됨.)
\w : [A-z0-9_]
\W : [^A-z0-9_] -> 대문자는 소문자의 반대 
\s : 
\S :
\d : [0-9]
\D : [^0-9]
\b : boundary (앞에 있느냐 뒤에 있느냐에 따라 다름 ) 단어 시작, 단어 끝
    -> \bcat   
    -> cat\b
\B :
\A : ^과 비슷하지만 조금 다름 (^는 줄마다 / \A는 문단의 끝 하나)
\Z : $과 비슷하지만 조금 다름

html에서 tag만 찾는 방법 -> <[^>]*>
sed 쓰면 위에 부분을 빈칸으로 바꿔서 tag외의 값을 알수 있음.
