print "data = '[",
for i in range(125461):
	A = map(float, raw_input().split())
	print '{"sx":'+str(A[0])+', "sy":'+str(A[1])+', "ex":'+str(A[2])+', "ey":'+str(A[3])+"},",
A = map(float, raw_input().split())
print '{"sx":'+str(A[0])+', "sy":'+str(A[1])+', "ex":'+str(A[2])+', "ey":'+str(A[3])+"}",
print "]';"
