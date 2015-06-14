def aSillyFunctionShort(list):
	'''A function that will sort a list of dictionaries and group 
	them alphabetically by brand then type'''
	#Most compact solution
    return sorted(list, key=lambda k:(k['brand'], k['type']))