import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Snow extends StatelessWidget {
  const Snow({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Snow.svg');
}
