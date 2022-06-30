import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ViewGrid extends StatelessWidget {
  const ViewGrid({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/ViewGrid.svg');
}
