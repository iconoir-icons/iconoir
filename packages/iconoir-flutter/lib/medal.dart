import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Medal extends StatelessWidget {
  const Medal({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Medal.svg');
}
