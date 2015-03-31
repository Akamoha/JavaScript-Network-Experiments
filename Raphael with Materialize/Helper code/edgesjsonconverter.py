print "data = '[",
for i in range(125461):
	A = map(float, raw_input().split())
	print '{"sx":'+str(A[1])+', "sy":'+str(A[2])+', "ex":'+str(A[4])+', "ey":'+str(A[5])+', "r":'+str(A[6])+', "g":'+str(A[7])+', "b":'+str(A[8])+', "alpha":'+str(A[9])+"},",
A = map(float, raw_input().split())
print '{"sx":'+str(A[1])+', "sy":'+str(A[2])+', "ex":'+str(A[4])+', "ey":'+str(A[5])+', "r":'+str(A[6])+', "g":'+str(A[7])+', "b":'+str(A[8])+', "alpha":'+str(A[9])+"}",
print "]';"
