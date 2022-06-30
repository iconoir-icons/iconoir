import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MacControlKey extends StatelessWidget {
  const MacControlKey({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/MacControlKey.svg');
}
