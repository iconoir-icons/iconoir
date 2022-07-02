import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class TrainOutline extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const TrainOutline({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.6087 7H14.3913C15.832 7 17 8.16795 17 9.6087C17 9.82481 16.8248 10 16.6087 10H7.3913C7.17519 10 7 9.82481 7 9.6087C7 8.16795 8.16795 7 9.6087 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 19H10L8.27639 22.4472C8.107 22.786 7.76074 23 7.38197 23H6.61803C5.87465 23 5.39116 22.2177 5.72361 21.5528L7 19Z" fill="currentColor"/>
<path d="M17 19H14L15.7236 22.4472C15.893 22.786 16.2393 23 16.618 23H17.382C18.1253 23 18.6088 22.2177 18.2764 21.5528L17 19Z" fill="currentColor"/>
<path d="M9 3H15C18.3137 3 21 5.68629 21 9V13C21 16.3137 18.3137 19 15 19H9C5.68629 19 3 16.3137 3 13V9C3 5.68629 5.68629 3 9 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 15.01L16.01 14.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 15.01L8.01 14.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
