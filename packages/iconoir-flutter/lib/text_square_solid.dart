import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class TextSquareSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const TextSquareSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 3.6C2.25 2.85441 2.85442 2.25 3.6 2.25H20.4C21.1456 2.25 21.75 2.85442 21.75 3.6V20.4C21.75 21.1456 21.1456 21.75 20.4 21.75H3.6C2.85441 21.75 2.25 21.1456 2.25 20.4V3.6ZM6.25 7C6.25 6.58579 6.58579 6.25 7 6.25H12H17C17.1989 6.25 17.3897 6.32902 17.5303 6.46967C17.671 6.61032 17.75 6.80109 17.75 7V9C17.75 9.41421 17.4142 9.75 17 9.75C16.5858 9.75 16.25 9.41421 16.25 9V7.75H12.75V16.25H14C14.4142 16.25 14.75 16.5858 14.75 17C14.75 17.4142 14.4142 17.75 14 17.75H12H10C9.58579 17.75 9.25 17.4142 9.25 17C9.25 16.5858 9.58579 16.25 10 16.25H11.25V7.75H7.75V9C7.75 9.41421 7.41421 9.75 7 9.75C6.58579 9.75 6.25 9.41421 6.25 9V7Z" fill="currentColor"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
