"""Sample code to read in test cases:"""

import sys
test_cases = open(sys.argv[1], 'r')
for test in test_cases:
    # ignore test if it is an empty line
    # 'test' represents the test case, do something with it
    # ...
    # ...
    num_list = test.split(',')
    num_dict = {}
    major_element = "hello"
    has_major_element = False
    
    # print num_list[0]
    
    for i in range(0, len(num_list)):
        if num_list[i] in num_dict:
            num_dict[num_list[i]] += 1
        else:
            num_dict[num_list[i]] = 1
            
    for key in num_dict:
        # print num_dict[key]
        # print 'list length: %i' % len(num_list)
        if num_dict[key] > (len(num_list))/2:
            print key
            has_major_element = True
            print has_major_element
            
    # if has_major_element == False:
    #     print "None"

test_cases.close()