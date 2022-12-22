import java.util.Scanner;

class getinput{
public static void main(String[] args){
int a;
float b;
String s;
Scanner sc = new Scanner(System.in);

System.out.println("enter int value");
a = sc.nextint();
System.out.println(a);

System.out.println("enter float value");
b = sc.nextfloat();
System.out.println(b);


System.out.println("enter string value");
s = sc.nextline();
System.out.println();

}
}