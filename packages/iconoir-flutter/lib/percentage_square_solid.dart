import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PercentageSquareSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const PercentageSquareSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 2.25C2.85442 2.25 2.25 2.85441 2.25 3.6V20.4C2.25 21.1456 2.85441 21.75 3.6 21.75H20.4C21.1456 21.75 21.75 21.1456 21.75 20.4V3.6C21.75 2.85442 21.1456 2.25 20.4 2.25H3.6ZM15.5 14.25C14.8096 14.25 14.25 14.8096 14.25 15.5C14.25 16.1904 14.8096 16.75 15.5 16.75C16.1904 16.75 16.75 16.1904 16.75 15.5C16.75 14.8096 16.1904 14.25 15.5 14.25ZM7.25 8.5C7.25 7.80964 7.80964 7.25 8.5 7.25C9.19036 7.25 9.75 7.80964 9.75 8.5C9.75 9.19036 9.19036 9.75 8.5 9.75C7.80964 9.75 7.25 9.19036 7.25 8.5ZM15.4697 7.46967C15.7626 7.17678 16.2374 7.17678 16.5303 7.46967C16.8232 7.76256 16.8232 8.23744 16.5303 8.53033L8.53033 16.5303C8.23744 16.8232 7.76256 16.8232 7.46967 16.5303C7.17678 16.2374 7.17678 15.7626 7.46967 15.4697L15.4697 7.46967Z" fill="currentColor"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
