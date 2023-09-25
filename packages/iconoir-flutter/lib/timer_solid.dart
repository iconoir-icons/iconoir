import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class TimerSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const TimerSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 5.25C7.16751 5.25 3.25 9.16751 3.25 14C3.25 18.8325 7.16751 22.75 12 22.75C16.8325 22.75 20.75 18.8325 20.75 14C20.75 9.16751 16.8325 5.25 12 5.25ZM12.75 10C12.75 9.58579 12.4142 9.25 12 9.25C11.5858 9.25 11.25 9.58579 11.25 10L11.25 14C11.25 14.4142 11.5858 14.75 12 14.75C12.4142 14.75 12.75 14.4142 12.75 14L12.75 10Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 2C8.25 1.58579 8.58579 1.25 9 1.25L15 1.25C15.4142 1.25 15.75 1.58579 15.75 2C15.75 2.41421 15.4142 2.75 15 2.75L9 2.75C8.58579 2.75 8.25 2.41421 8.25 2Z" fill="currentColor"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}