import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Number2SquareSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Number2SquareSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 2.25C2.85442 2.25 2.25 2.85441 2.25 3.6V20.4C2.25 21.1456 2.85441 21.75 3.6 21.75H20.4C21.1456 21.75 21.75 21.1456 21.75 20.4V3.6C21.75 2.85442 21.1456 2.25 20.4 2.25H3.6ZM10.25 10.4C10.25 9.46073 10.9749 8.75 11.8077 8.75C12.6405 8.75 13.3654 9.46073 13.3654 10.4C13.3654 10.7213 13.2793 11.0178 13.1324 11.2683C12.67 12.057 11.6782 13.0782 10.7378 13.9441C10.2789 14.3665 9.85144 14.7348 9.53856 14.9976C9.3823 15.1289 9.2551 15.2334 9.16743 15.3047C9.12361 15.3404 9.0897 15.3677 9.06701 15.3859L9.04159 15.4063L9.0355 15.4111L9.03417 15.4122L9.034 15.4123L9.03394 15.4124C8.78395 15.6107 8.68678 15.9454 8.79175 16.2467C8.89672 16.5481 9.18089 16.75 9.5 16.75H14.5C14.9142 16.75 15.25 16.4142 15.25 16C15.25 15.5858 14.9142 15.25 14.5 15.25H11.5319C11.6048 15.1841 11.6789 15.1165 11.7537 15.0476C12.6904 14.1853 13.8383 13.0302 14.4265 12.027C14.7059 11.5504 14.8654 10.9926 14.8654 10.4C14.8654 8.6883 13.5239 7.25 11.8077 7.25C10.0915 7.25 8.75 8.6883 8.75 10.4V10.8C8.75 11.2142 9.08579 11.55 9.5 11.55C9.91421 11.55 10.25 11.2142 10.25 10.8V10.4Z" fill="currentColor"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
