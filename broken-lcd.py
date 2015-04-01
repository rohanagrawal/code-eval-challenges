"""Sample code to read in test cases:"""

import sys
test_cases = open(sys.argv[1], 'r')
for test in test_cases:
    num_segments = {
      '0' : [1, 1, 1, 1, 1, 1, 0],
      '1' : [0, 1, 1, 0, 0, 0, 0],
      '2' : [1, 1, 0, 1, 1, 0, 1],
      '3' : [1, 1, 1, 1, 0, 0, 1],
      '4' : [0, 1, 1, 0, 0, 1, 1],
      '5' : [1, 0, 1, 1, 0, 1, 1],
      '6' : [1, 0, 1, 1, 1, 1, 1],
      '7' : [1, 1, 1, 0, 0, 0, 0],
      '8' : [1, 1, 1, 1, 1, 1, 1],
      '9' : [1, 1, 1, 1, 0, 1, 1]
    }
    
    inputs = test.split(';')
    display_num = list(inputs[1])
    display_num.pop()
    screen_spots = inputs[0].split(' ')
    
    for i in range(0, len(screen_spots)):
      screen_spots[i] = list(screen_spots[i])
      for n in range(0, len(screen_spots[i])):
        screen_spots[i][n] = int(screen_spots[i][n])
    
    segments_required = []
    
    for a in range(0, len(display_num)):
      current_segments = []
      if display_num[a] != '.':
        for b in range(0, len(num_segments[display_num[a]])):
          current_segments.append(num_segments[display_num[a]][b])
        if a < len(display_num)-1:
            if display_num[a+1] == '.':
              current_segments.append(1)
            else:
              current_segments.append(0)
        segments_required.append(current_segments)
    
    def array_match(arr_a, arr_b):
      for x in range(0,7):
        if arr_a[x] == 1:
          if arr_b[x] == 0:
            return False
      return True
      
    
    spots_to_check = len(screen_spots) - len(segments_required) + 1
    functionality_LED = 1
    
    for y in range(0, spots_to_check):
      functionality_LED = 1
      for z in range(0, len(segments_required)):
        if (y+z) < len(screen_spots)-1:
            if not array_match(segments_required[z], screen_spots[y+z]):
              functionality_LED = 0
      if functionality_LED == 1:
        break
    
    print functionality_LED

test_cases.close()







