import matplotlib.pyplot as plt

correct = 0


def aud():
    plt.bar(options, percentage)
    plt.title('Audience Poll')
    plt.xlabel('Option')
    plt.ylabel('Percentage (%)')
    plt.show()


def counter(correct):
    correct = correct + 1
    return correct


def lifeline(e):
    e = e - 1
    return e


print('KBV(Kon Bhai Velle) mein apka Swagat hai!\n')

Q1 = 'Q1. What is the Capital of Mumbai as per Paresh Raval?\n'
o1 = 'a. Dharavi\n'
o2 = 'b. Bandra\n'
o3 = 'c. Borivali\n'
o4 = 'd. Kandivali\n'
o5 = 'e. Use audience poll'

print(Q1 + o1 + o2 + o3 + o4 + o5)

a1 = input()
options = ['a', 'b', 'c', 'd']
percentage = [75, 5, 15, 5]


def Q1():
    if a1.lower() == 'a':
        print('Adhbhut adhbhut')
        counter(correct)
    else:
        print('ohh ghalat jawab')


if a1.lower() == 'e':
    aud()
    a1 = input('ENTER YOUR OPTION:')

Q1()
correct = counter(correct)
e = lifeline(e)

for e in lifeline(e):
    if e == 0:
        print("you have exhausted your lifeline")

# Yahase Q2

Q2 = '\nQ2. Dene wala jab bhi deta hai kaise deta hai?\n'
o1 = 'a. chhappad faad ke \n'
o2 = 'b. Lungi faad ke\n'
o3 = 'c. Lungi uthake\n'
o4 = 'd. patloon fadke\n'
o5 = 'e. Use audience poll'
print(Q2 + o1 + o2 + o3 + o4 + o5)

a2 = input()
options = ['a', 'b', 'c', 'd']
percentage = [75, 12, 8, 5]


def Q2():
    if a2.lower() == 'a':
        print('Adhbhut adhbhut')
        counter(correct)
    else:
        print('ohh ghalat jawab')


if a2.lower() == 'e':
    aud()
    a2 = input('ENTER YOUR OPTION:')
Q2()
correct = counter(correct)
print(correct)

Q3 = '\nQ3. "Sehlenge Thoda sa?" yeh adhbhut uttar kiska tha\n'
o1 = 'a. Majnubhai \n'
o2 = 'b. Akki\n'
o3 = 'c. Kat\n'
o4 = 'd. Udaybhai\n'
o5 = 'e. Use audience poll'
print(Q3 + o1 + o2 + o3 + o4 + o5)

a3 = input()
options = ['a', 'b', 'c', 'd']
percentage = [15, 12, 8, 65]


def Q3():
    if a3.lower() == 'd':
        print('Adhbhut adhbhut')
        counter(correct)
    else:
        print('ohh ghalat jawab')


if a3.lower() == 'e':
    aud()
    a3 = input('ENTER YOUR OPTION:')
Q3()
correct = counter(correct)
print(correct)

# Yahase Q4

Q4 = '\nQ4. Anuradha kiski bahin hai\n'
o1 = 'a. baburao ki\n'
o2 = 'b. ek ka double karnewale ki\n'
o3 = 'c. aap ki\n'
o4 = 'd. Shyam ki\n'
o5 = 'e. Use audience poll'
print(Q4 + o1 + o2 + o3 + o4 + o5)

a4 = input()
options = ['a', 'b', 'c', 'd']
percentage = [6, 90, 2, 2]


def Q4():
    if a4.lower() == 'b':
        print('Adhbhut adhbhut')
        counter(correct)
    else:
        print('ohh ghalat jawab')


if a4.lower() == 'e':
    aud()
    a4 = input('ENTER YOUR OPTION:')
Q4()
correct = counter(correct)
print(correct)

# Last Question

print('\nAntim sawal\n')
Q5 = '\nQ5. KBC mein Crorepati kon banta hai?\n'
o1 = 'a. Jismein kuchh kar dikhaneka junoon ho\n'
o2 = 'b. Jiska General Knowledge bohot hi achha ho\n'
o3 = 'c. Gareeb\n'
o4 = 'd. Amitabh Bachhan\n'
o5 = 'e. Use audience poll'
print(Q5 + o1 + o2 + o3 + o4 + o5)

a5 = input()
options = ['a', 'b', 'c', 'd']
percentage = [15, 12, 8, 65]


def Q5():
    if a5.lower() == 'd':
        print('Adhbhut adhbhut')
        counter(correct)
    else:
        print('ohh ghalat jawab')


if a5.lower() == 'e':
    aud()
    a5 = input('ENTER YOUR OPTION:')
Q5()
correct = counter(correct)
print(correct)

# Result Time

total = ((correct / 5) * 100)

print('\naapke kul milakar' + str(correct) + 'huve' + '\nyani ' + str(total) + '%' + '\nbohot khoob')
