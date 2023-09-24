import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ItalicSquareSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ItalicSquareSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 2.25C2.85442 2.25 2.25 2.85441 2.25 3.6V20.4C2.25 21.1456 2.85441 21.75 3.6 21.75H20.4C21.1456 21.75 21.75 21.1456 21.75 20.4V3.6C21.75 2.85442 21.1456 2.25 20.4 2.25H3.6ZM16 6.75H14.5406L11.0406 17.25H12C12.4142 17.25 12.75 17.5858 12.75 18C12.75 18.4142 12.4142 18.75 12 18.75H10H8C7.58579 18.75 7.25 18.4142 7.25 18C7.25 17.5858 7.58579 17.25 8 17.25H9.45943L12.9594 6.75L12 6.75C11.5858 6.75 11.25 6.41421 11.25 6C11.25 5.58579 11.5858 5.25 12 5.25L14 5.25L16 5.25C16.4142 5.25 16.75 5.58579 16.75 6C16.75 6.41421 16.4142 6.75 16 6.75Z" fill="currentColor"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
