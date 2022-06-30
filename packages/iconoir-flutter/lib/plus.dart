import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Plus extends StatelessWidget {
  const Plus({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Plus.svg');
}
