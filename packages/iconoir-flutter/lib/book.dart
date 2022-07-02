import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Book extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Book({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" stroke-width="1.5" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 19V5C4 3.89543 4.89543 3 6 3H19.4C19.7314 3 20 3.26863 20 3.6V16.7143" stroke="currentColor"  stroke-linecap="round"/>
<path d="M6 17L20 17" stroke="currentColor"  stroke-linecap="round"/>
<path d="M6 21L20 21" stroke="currentColor"  stroke-linecap="round"/>
<path d="M6 21C4.89543 21 4 20.1046 4 19C4 17.8954 4.89543 17 6 17" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 7L15 7" stroke="currentColor"  stroke-linecap="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
