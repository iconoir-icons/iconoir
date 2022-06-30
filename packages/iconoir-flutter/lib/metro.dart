import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Metro extends StatelessWidget {
  const Metro({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Metro.svg');
}
