print "data = '[",
for i in range(43734):
	A = map(float, raw_input().split())
	print '{"x":'+str(A[0])+', "y":'+str(A[1])+"},",
A = map(float, raw_input().split())
print '{"x":'+str(A[0])+', "y":'+str(A[1])+"}",
print "]';"
	