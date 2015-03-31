print "data = '[",
for i in range(43734):
	A = map(float, raw_input().split())
	print '{"x":'+str(A[1])+', "y":'+str(A[2])+', "radius":'+str(A[3])+', "r":'+str(A[4])+', "g":'+str(A[5])+', "b":'+str(A[6])+"},",
A = map(float, raw_input().split())
print '{"x":'+str(A[1])+', "y":'+str(A[2])+', "radius":'+str(A[3])+', "r":'+str(A[4])+', "g":'+str(A[5])+', "b":'+str(A[6])+"}",
print "]';"