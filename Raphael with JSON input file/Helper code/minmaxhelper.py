X = []
Y = []
for i in range(43735):
	A = map(float, raw_input().split())
	X.append(A[0])
	Y.append(A[1])
print "Min X: "+str(min(X))
print "Max X: "+str(max(X))
print "Min Y: "+str(min(Y))
print "Max Y: "+str(max(Y))