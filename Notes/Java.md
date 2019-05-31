> forEach
```java
for (Student st : getStudentsAsList()) {
            System.out.println(st.getId() + " : " + st.getName());
        }

private static ArrayList<Student> getStudentsAsList() {

    ArrayList<Student> students = new ArrayList<>();

    students.add(new Student("Bugs", 1));
    students.add(new Student("Deffy", 2));
    students.add(new Student("Tweety", 3));

    return students;
}        
```    