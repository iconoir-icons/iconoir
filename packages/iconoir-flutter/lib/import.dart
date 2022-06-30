import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Import extends StatelessWidget {
  const Import({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Import.svg');
}
