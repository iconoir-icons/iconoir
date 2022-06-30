import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Frame extends StatelessWidget {
  const Frame({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Frame.svg');
}
