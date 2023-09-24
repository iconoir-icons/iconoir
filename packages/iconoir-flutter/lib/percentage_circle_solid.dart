import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PercentageCircleSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const PercentageCircleSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM15.5 14.25C14.8096 14.25 14.25 14.8096 14.25 15.5C14.25 16.1904 14.8096 16.75 15.5 16.75C16.1904 16.75 16.75 16.1904 16.75 15.5C16.75 14.8096 16.1904 14.25 15.5 14.25ZM7.25 8.5C7.25 7.80964 7.80964 7.25 8.5 7.25C9.19036 7.25 9.75 7.80964 9.75 8.5C9.75 9.19036 9.19036 9.75 8.5 9.75C7.80964 9.75 7.25 9.19036 7.25 8.5ZM15.4697 7.46967C15.7626 7.17678 16.2374 7.17678 16.5303 7.46967C16.8232 7.76256 16.8232 8.23744 16.5303 8.53033L8.53033 16.5303C8.23744 16.8232 7.76256 16.8232 7.46967 16.5303C7.17678 16.2374 7.17678 15.7626 7.46967 15.4697L15.4697 7.46967Z" fill="currentColor"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
